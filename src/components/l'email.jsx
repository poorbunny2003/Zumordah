import React from "react";

const PasswordReset = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>إعادة تعيين كلمة المرور</h1>
      <p style={styles.text}>أدخل عنوان بريدك الإلكتروني لتلقي رمز التحقق</p>
      <form action="/send-verification-code" method="post" style={styles.form}>
        <div style={styles.formGroup}>
          <input type="email" id="email" name="email" placeholder="عنوان البريد الإلكتروني" required style={styles.input} />
        </div>
        <div style={styles.formGroup}>
          <button type="submit" style={styles.button}>إرسال الرمز</button>
        </div>
      </form>
    </div>
  );
};

const styles = {
  container: {
    backgroundColor: "white",
    padding: "20px",
    borderRadius: "8px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    width: "100%",
    maxWidth: "400px",
    textAlign: "center",
    fontFamily: "Arial, sans-serif",
    margin: "auto",
    marginTop: "15vh",
  },
  title: {
    marginBottom: "20px",
    color: "#333",
  },
  text: {
    marginBottom: "15px",
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
    fontSize: "1em",
  },
  button: {
    width: "70%",
    padding: "10px",
    backgroundColor: "#750a45",
    color: "white",
    border: "none",
    borderRadius: "25px",
    fontSize: "1em",
    cursor: "pointer",
  },
};

export default PasswordReset;
