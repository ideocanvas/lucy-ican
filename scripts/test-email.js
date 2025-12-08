import { sendEmail, verifySMTPConnection, emailTemplates } from '../src/lib/email.js';

async function testEmailConfiguration() {
  console.log('Testing SMTP email configuration...\n');

  // Test SMTP connection
  console.log('1. Testing SMTP connection...');
  const connectionSuccess = await verifySMTPConnection();
  if (!connectionSuccess) {
    console.error('❌ SMTP connection failed. Please check your SMTP configuration in .env.local');
    console.log('Required environment variables:');
    console.log('- SMTP_HOST');
    console.log('- SMTP_PORT');
    console.log('- SMTP_USER');
    console.log('- SMTP_PASSWORD');
    console.log('- SMTP_FROM_NAME (optional)');
    console.log('- SMTP_FROM_EMAIL (optional)');
    return;
  }
  console.log('✅ SMTP connection successful\n');

  // Test email sending with a test email
  console.log('2. Testing email sending...');
  
  // Use a test email address or the configured SMTP user email
  const testEmail = process.env.SMTP_USER || 'test@example.com';
  
  const testEmailOptions = {
    to: testEmail,
    subject: 'Test Email from Lucy Ican',
    html: emailTemplates.welcome(testEmail, 'Test User').html,
  };

  try {
    const sendSuccess = await sendEmail(testEmailOptions);
    if (sendSuccess) {
      console.log('✅ Test email sent successfully to:', testEmail);
      console.log('📧 Check your inbox for the test email');
    } else {
      console.error('❌ Failed to send test email');
    }
  } catch (error) {
    console.error('❌ Error sending test email:', error.message);
  }

  console.log('\n3. Email templates available:');
  console.log('   - Verification email');
  console.log('   - Password reset email');
  console.log('   - Welcome email');
  console.log('   - Magic link email (modified verification template)');
}

// Run the test
testEmailConfiguration().catch(console.error);