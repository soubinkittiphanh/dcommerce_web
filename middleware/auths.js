// middleware/auths.js
export default function ({ $auth, redirect, route, error }) {
  try {
    if (!$auth.loggedIn) {
      return redirect('/admin/login')
    }
  } catch (err) {
    console.error('Auth middleware error:', err)
    return redirect('/admin/login')
  }
}