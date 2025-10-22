import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { email } = body;

    if (!email) {
      return NextResponse.json(
        { error: 'Email is required' },
        { status: 400 }
      );
    }

    // Check if Resend API key is configured
    if (!process.env.RESEND_API_KEY) {
      console.error('Resend API key not configured');
      return NextResponse.json(
        { error: 'Service temporarily unavailable' },
        { status: 500 }
      );
    }


    // Add contact to Resend audience first
    const audienceId = process.env.RESEND_AUDIENCE_ID;
    if (audienceId) {
      try {
        await resend.contacts.create({
          email: email,
          firstName: email.split('@')[0], // Use email prefix as first name
          lastName: '', // We don't collect last name
          unsubscribed: false,
          audienceId: audienceId,
        });
      } catch (audienceError) {
        // Continue with email sending even if audience addition fails
        // Log error for monitoring but don't expose to client
        console.error('Failed to add contact to audience:', audienceError);
      }
    }

    // Send welcome email using Resend
    const { error } = await resend.emails.send({
      from: 'SimuPanel <welcome@resend.dev>', // You'll need to verify your domain
      to: [email],
      subject: `Welcome to SimuPanel - You're on the list! 🧪`,
      html: `
        <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 600px; margin: 0 auto; background: #ffffff;">
          <!-- Header with gradient background -->
          <div style="background: linear-gradient(135deg, #1e40af 0%, #3b82f6 100%); padding: 40px 20px; text-align: center; border-radius: 12px 12px 0 0;">
            <h1 style="color: #ffffff; font-size: 28px; font-weight: 700; margin: 0; letter-spacing: -0.5px;">Welcome to SimuPanel</h1>
            <p style="color: #e0e7ff; font-size: 16px; margin: 8px 0 0 0; font-weight: 400;">You're officially on the waitlist</p>
          </div>
          
          <!-- Main content -->
          <div style="padding: 32px 24px;">
            <p style="color: #374151; font-size: 16px; line-height: 1.6; margin: 0 0 24px 0;">Hi there!</p>
            
            <p style="color: #374151; font-size: 16px; line-height: 1.6; margin: 0 0 24px 0;">
              Thank you for joining the SimuPanel waitlist! We're building something that will revolutionize how you validate product ideas.
            </p>
            
            <!-- What's next section -->
            <h3 style="color: #1e293b; font-size: 18px; font-weight: 600; margin: 32px 0 16px 0;">What happens next</h3>
            
            <div style="margin-bottom: 24px;">
              <div style="display: flex; align-items: flex-start; margin-bottom: 16px;">
                <span style="margin-right: 12px; font-size: 16px;">✅</span>
                <p style="margin: 0; color: #475569; font-size: 15px; line-height: 1.5;">You'll be the first to know when we launch</p>
              </div>
              
              <div style="display: flex; align-items: flex-start; margin-bottom: 16px;">
                <span style="margin-right: 12px; font-size: 16px;">✅</span>
                <p style="margin: 0; color: #475569; font-size: 15px; line-height: 1.5;">Exclusive early access pricing</p>
              </div>
              
              <div style="display: flex; align-items: flex-start; margin-bottom: 16px;">
                <span style="margin-right: 12px; font-size: 16px;">✅</span>
                <p style="margin: 0; color: #475569; font-size: 15px; line-height: 1.5;">Behind-the-scenes updates on our progress</p>
              </div>
              
              <div style="display: flex; align-items: flex-start;">
                <span style="margin-right: 12px; font-size: 16px;">✅</span>
                <p style="margin: 0; color: #475569; font-size: 15px; line-height: 1.5;">No spam - we only send important updates</p>
              </div>
            </div>
            
            <p style="color: #374151; font-size: 16px; line-height: 1.6; margin: 24px 0;">
              We're building something special, and we can't wait to share it with you!
            </p>
            
            <div style="margin: 32px 0;">
              <p style="margin: 0; color: #374151; font-size: 16px; font-weight: 500;">Best regards,</p>
              <p style="margin: 4px 0 0 0; color: #6b7280; font-size: 15px;">The SimuPanel Team</p>
            </div>
          </div>
          
          <!-- Footer -->
          <div style="background: #f8fafc; padding: 20px 24px; border-radius: 0 0 12px 12px; border-top: 1px solid #e2e8f0;">
            <p style="margin: 0; font-size: 13px; color: #64748b; text-align: center;">
              You signed up on ${new Date().toLocaleDateString()} from our website
            </p>
          </div>
        </div>
      `,
    });

    if (error) {
      // Log error for monitoring but don't expose details to client
      console.error('Resend error:', error);
      return NextResponse.json(
        { error: 'Failed to send welcome email. Please try again.' },
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,
      message: 'Successfully joined waitlist'
    });

  } catch (error) {
    console.error('Waitlist signup error:', error);
    return NextResponse.json(
      { error: 'Internal server error. Please try again.' },
      { status: 500 }
    );
  }
}