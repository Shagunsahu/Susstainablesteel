// Test script to verify form submission to backend

const testFormSubmission = async () => {
  try {
    console.log('Testing form submission to https://sustainable-api.onrender.com/api/contact');
    
    const testData = {
      name: "Test User",
      email: "test@example.com",
      phone: "971508614171",
      company: "Test Company",
      service: "roof-ventilators",
      message: "This is a test message"
    };

    const response = await fetch('https://sustainable-api.onrender.com/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(testData),
    });

    const data = await response.json();
    
    console.log('Response Status:', response.status);
    console.log('Response Data:', data);
    
    if (response.ok) {
      console.log('✅ Form submission successful!');
    } else {
      console.log('❌ Form submission failed!');
    }
  } catch (error) {
    console.error('❌ Error testing form submission:', error.message);
    console.error('This likely means:');
    console.error('1. The backend API is not running');
    console.error('2. The URL is incorrect');
    console.error('3. There is a network/CORS issue');
  }
};

testFormSubmission();
