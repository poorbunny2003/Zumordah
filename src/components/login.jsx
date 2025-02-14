import React from "react";

const LoginForm = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>حسابك</h1>
      <form action="#" method="POST" style={styles.form}>
        <input type="text" name="username" placeholder="اسم المستخدم" required style={styles.input} />
        <input type="password" name="password" placeholder="كلمة المرور" required style={styles.input} />
        <div style={styles.formGroup}>
          <button type="submit" style={styles.button}>تسجيل الدخول</button>
        </div>
        <div style={styles.signupLink}>
          <a href="l'email.html" style={styles.link}>* نسيت كلمة المرور؟</a>
        </div>
        <div style={styles.signupLink}>
          * ليس لديك حساب؟ <a href="signup.html" style={styles.link}>إنشاء حساب</a>
        </div>
      </form>
    </div>
  );
};

const styles = {
  container: {
    width: "350px",
    padding: "30px",
    background: "#ffffff",
    boxShadow: "0 8px 16px rgba(0, 0, 0, 0.2)",
    borderRadius: "10px",
    textAlign: "center",
    fontFamily: "Arial, sans-serif",
    margin: "auto",
    marginTop: "15vh",
  },
  title: {
    marginBottom: "20px",
    fontSize: "24px",
    color: "#333",
  },
  form: {
    width: "100%",
  },
  input: {
    width: "90%",
    padding: "10px",
    margin: "15px 0",
    border: "1px solid #000000",
    borderRadius: "10px",
    fontSize: "13px",
  },
  formGroup: {
    marginBottom: "15px",
  },
  button: {
    width: "70%",
    padding: "10px",
    backgroundColor: "#750a45",
    color: "white",
    border: "none",
    borderRadius: "25px",
    cursor: "pointer",
    fontSize: "1em",
  },
  buttonHover: {
    backgroundColor: "#d16ebc",
  },
  signupLink: {
    marginTop: "10px",
  },
  link: {
    color: "rgb(0, 152, 137)",
    textDecoration: "none",
  },
};

export default LoginForm;
