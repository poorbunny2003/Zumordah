import React from "react";

const PasswordResetStep2 = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>رمز التحقق</h1>
      <p style={styles.text}>أدخل رمز التحقق الذي تلقيته في بريدك الإلكتروني وقم بتعيين كلمة مرور جديدة.</p>
      <form action="/verify-code" method="post" style={styles.form}>
        <div style={styles.formGroup}>
          <input type="text" id="verification-code" name="verification-code" placeholder="رمز التحقق" required style={styles.input} />
        </div>
        <div style={styles.formGroup}>
          <input type="password" id="new-password" name="new-password" placeholder="كلمة المرور الجديدة" required style={styles.input} />
        </div>
        <div style={styles.formGroup}>
          <button type="submit" style={styles.button}>إعادة تعيين كلمة المرور</button>
        </div>
      </form>
    </div>
  );
};

const styles = {
  container: {
    background: "white",
    padding: "20px",
    borderRadius: "8px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    width: "100%",
    maxWidth: "400px",
    textAlign: "center",
    margin: "auto",
    marginTop: "15vh",
    fontFamily: "Arial, sans-serif",
  },
  title: {
    marginBottom: "20px",
    fontSize: "24px",
    color: "#333",
  },
  text: {
    marginBottom: "15px",
    color: "#333",
  },
  form: {
    width: "100%",
  },
  formGroup: {
    marginBottom: "15px",
  },
  input: {
    width: "90%",
    padding: "15px",
    border: "1px solid #000000",
    borderRadius: "10px",
    fontSize: "13px",
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
};

export default PasswordResetStep2;
