import React from 'react';

function Signup() {
  return (
    <div style={styles.body}>
      <div style={styles.signupContainer}>
        <h1 style={styles.heading}>إنشاء حساب جديد</h1>
        <form action="/submit-signup" method="post">
          <div style={styles.formGroup}>
            <input
              type="text"
              id="username"
              name="username"
              placeholder="اسم المستخدم"
              required
              style={styles.input}
            />
          </div>
          <div style={styles.formGroup}>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="البريد الإلكتروني"
              required
              style={styles.input}
            />
          </div>
          <div style={styles.formGroup}>
            <input
              type="date"
              id="dob"
              name="dob"
              placeholder="تاريخ الميلاد"
              required
              style={styles.input}
            />
          </div>
          <div style={styles.formGroup}>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="كلمة المرور"
              required
              style={styles.input}
            />
          </div>
          <div style={styles.formGroup}>
            <center>
              <button type="submit" style={styles.button}>تسجيل</button>
            </center>
          </div>
        </form>
        <div style={styles.formFooter}>
          <center>
            <p>*هل لديك حساب؟ <a href="login.html" style={styles.link}>تسجيل الدخول</a></p>
          </center>
        </div>
      </div>
    </div>
  );
}

const styles = {
  body: {
    fontFamily: 'Arial, sans-serif',
    margin: 0,
    padding: 0,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    backgroundColor: '#f4f4f9',
  },
  signupContainer: {
    background: 'white',
    padding: '20px',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    width: '100%',
    maxWidth: '400px',
  },
  heading: {
    textAlign: 'center',
    marginBottom: '20px',
    color: '#333',
  },
  formGroup: {
    marginBottom: '15px',
  },
  input: {
    width: '90%',
    padding: '10px',
    margin: '15px 0',
    border: '1px solid #000000',
    borderRadius: '10px',
    fontSize: '14px',
  },
  button: {
    width: 'calc(70% - 20px)',
    padding: '10px',
    backgroundColor: '#750a45',
    color: 'white',
    border: 'none',
    borderRadius: '25px',
    cursor: 'pointer',
  },
  formFooter: {
    textAlign: 'center',
  },
  link: {
    color: 'rgb(0, 152, 137)',
    textDecoration: 'underline',
  },
};

export default Signup;
