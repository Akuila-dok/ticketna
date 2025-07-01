import { NextRequest, NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function POST(req: NextRequest) {
  try {
    const session = await getServerSession(authOptions); // can be null
    const body = await req.json();
    const { id: ticketId } = body;

    if (!ticketId) {
      return NextResponse.json({ error: 'Ticket ID missing' }, { status: 400 });
    }

    const booking = await prisma.booking.create({
      data: {
        ticketId,
        userId: session?.user?.id ?? null, // null if not logged in
        status: 'PENDING',
      },
    });

    return NextResponse.json(booking, { status: 201 });
  } catch (error) {
    console.error('Booking error:', error);
    return NextResponse.json({ error: 'Failed to book ticket' }, { status: 500 });
  }
}
