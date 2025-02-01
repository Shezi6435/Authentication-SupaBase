const supabaseUrl = 'https://kxtslckblkazilpavxdw.supabase.co'; 
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imt4dHNsY2tibGthemlscGF2eGR3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzcyODA5MjAsImV4cCI6MjA1Mjg1NjkyMH0.Cu52SkCwe7zDLySvNl_Ma8RX9B2qAsR3hXAvqWFxGag';
const supa_base = supabase.createClient(supabaseUrl, supabaseKey);

async function handleLoginSubmit(event) {  
  event.preventDefault();    
  const form = event.target;     
  const email = form.email.value;     
  const password = form.password.value;      
  const { data, error } = await supa_base.auth.signInWithPassword({         
    email: email,         
    password: password,       
  })       
  window.location.href = 'dashboard.html' }  
  async function handleSignupSubmit(event){     
    event.preventDefault();     
    const form = event.target;     
    const email = form.email.value;     
    const password = form.password.value;     
    console.log('username', email);     
    console.log('password', password);       
const { data, error } = await supa_base.auth.signUp({       
  email: email,       
  password: password,          
})   
};  

document.getElementById('logout-btn').addEventListener('click', async () => {
  const { error } = await supa_base.auth.signOut();
  
  if (error) {
      alert(`Logout failed: ${error.message}`);
  } else {
      window.location.href = 'index.html'; // Redirect to login page
  }
});


// async function handleLoginSubmit(event) {
//     event.preventDefault();
//     const form = event.target;
//     const email = form.email.value;
//     const password = form.password.value;

//     const { data, error } = await supa_base.auth.signInWithPassword({
//         email: email,
//         password: password,
//     });

//     if (error) {
//         alert(`Login failed: ${error.message}`);
//     } else {
//         window.location.href = 'dashboard.html';
//     }
// }

// async function handleSignupSubmit(event) {
//     event.preventDefault();
//     const form = event.target;
//     const email = form.email.value;
//     const password = form.password.value;

//     const { data, error } = await supa_base.auth.signUp({
//         email: email,
//         password: password,
//     });

//     if (error) {
//         alert(`Signup failed: ${error.message}`);
//     } else {
//         alert('Signup successful! Please check your email to verify your account.');
//     }
// };
