import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const data = await request.json();
    
    // Replace with your actual form ID and entry IDs
    const formId = "1FAIpQLScTp9_BghYGFUWAkjIC9pBbu6RNB5UuvPpg1Bzgeyu3THavPQ";
    const nameId = "1632942225";
    const emailId = "1581272262";
    const subjectId = "58850824";
    const messageId = "1021204193";
    
    // Create form data
    const formData = new URLSearchParams();
    formData.append(`entry.${nameId}`, data.name);
    formData.append(`entry.${emailId}`, data.email);
    formData.append(`entry.${subjectId}`, data.subject);
    formData.append(`entry.${messageId}`, data.message);
    
    // Submit to Google Forms
    const response = await fetch(
      `https://docs.google.com/forms/d/e/1FAIpQLScTp9_BghYGFUWAkjIC9pBbu6RNB5UuvPpg1Bzgeyu3THavPQ/formResponse`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: formData.toString(),
        redirect: 'follow',
      }
    );
    
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error submitting form:', error);
    return NextResponse.json(
      { success: false, message: 'Failed to submit form' },
      { status: 500 }
    );
  }
}