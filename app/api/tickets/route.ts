// app/api/tickets/route.ts
import { NextRequest, NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

// GET all public tickets
export async function GET() {
  try {
    const tickets = await prisma.ticket.findMany({
      orderBy: { createdAt: 'desc' },
    });
    return NextResponse.json(tickets);
  } catch {
    return NextResponse.json({ error: 'Failed to fetch tickets' }, { status: 500 });
  }
}

// POST a new ticket
export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, description, date, price, flyerUrl, paymentMethods } = body;

    if (!name || !description || !date || !price || !paymentMethods.length) {
      return NextResponse.json({ error: 'Missing fields' }, { status: 400 });
    }

    const newTicket = await prisma.ticket.create({
      data: {
        name,
        description,
        date: new Date(date),
        price: parseInt(price),
        flyerUrl: flyerUrl || null,
        paymentMethods,
      },
    });

    return NextResponse.json(newTicket, { status: 201 });
  } catch {
    return NextResponse.json({ error: 'Failed to create ticket' }, { status: 500 });
  }
}
