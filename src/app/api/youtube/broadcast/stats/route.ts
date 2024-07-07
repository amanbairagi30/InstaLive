import { NextResponse, NextRequest } from 'next/server';
import {
  getMetrices,
  getLiveStreamDetails,
} from '@/app/api/services/broadcasts';
import { oauth2Client } from '@/app/api/youtube/google';
import { google } from 'googleapis';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';

export const GET = async (req: NextRequest) => {
  const { searchParams } = new URL(req.url);
  const type = searchParams.get('type');
  let youtubeBroadcastId = searchParams.get('broadCastId');

  console.log(type);

  const session = await getServerSession(authOptions);

  // @ts-ignore
  let access_token = session?.access_token;

  /* set the credentials */
  oauth2Client.setCredentials({ access_token });

  /* call the youtube api */
  const youtube = google.youtube({
    version: 'v3',
    auth: oauth2Client,
  });

  let response;

  try {
    if (youtubeBroadcastId) {
      youtubeBroadcastId = '67HsvAFuxzg';
      switch (type) {
        case 'metrics':
          response = await getMetrices(youtube, youtubeBroadcastId);
          response = response.data.items[0].statistics;
          break;
        case 'stream':
          response = await getLiveStreamDetails(youtube, youtubeBroadcastId);
          response = response.data.items[0].liveStreamingDetails;
          break;
        default:
          return NextResponse.json({ error: 'Invalid type' }, { status: 400 });
      }
    } else {
      return NextResponse.json(
        { error: 'Missing youtubeBroadcastId' },
        { status: 400 }
      );
    }
  } catch (error) {
    console.error('An error occurred:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }

  return NextResponse.json({ data: response });
};