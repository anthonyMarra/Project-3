// API modules are where the code lives to communicate
// with the server via AJAX

const herokuUrl = "https://agile-cliffs-15245.herokuapp.com"

const apiUrl = process.env.DEVELOPMENT ? url : herokuUrl + url
const BASE_URL = '/api/users';

export async function signUp(userData) {
  // Fetch uses an options object as a second arg to make
  // requests other than GET and/or send data and/or set headers
  console.log(userData)
  const res = await fetch(apiUrl, {
    method: 'POST',
    // MIME type of application/json
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(userData)
  });
  // Check if request succeeded
  if (res.ok) {
    // Promise will resolve to the JWT
    return res.json();
  } else {
    throw new Error('Invalid Sign Up');
  }
}

export async function login(credentials) {
  // Fetch uses an options object as a second arg to make
  // requests other than GET and/or send data and/or set headers
  const res = await fetch(`${apiUrl}/login`, {
    method: 'POST',
    // MIME type of application/json
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(credentials)
  });
  // Check if request succeeded
  if (res.ok) {
    // Promise will resolve to the JWT
    return res.json();
  } else {
    throw new Error('Invalid Log In');
  }
}