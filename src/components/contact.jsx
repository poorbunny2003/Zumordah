import React from "react";

const ContactForm = () => {
  return (
    <div style={styles.container}>
      <h2 style={styles.title}>اتصل بنا</h2>
      <form action="contact.php" method="POST" style={styles.form}>
        <div style={styles.formGroup}>
          <label htmlFor="name">الاسم الكامل</label>
          <input type="text" id="name" name="name" placeholder="أدخل اسمك الكامل" required style={styles.input} />
        </div>
        <div style={styles.formGroup}>
          <label htmlFor="email">البريد الإلكتروني</label>
          <input type="email" id="email" name="email" placeholder="أدخل بريدك الإلكتروني" required style={styles.input} />
        </div>
        <div style={styles.formGroup}>
          <label htmlFor="subject">الموضوع</label>
          <input type="text" id="subject" name="subject" placeholder="أدخل موضوع الرسالة" required style={styles.input} />
        </div>
        <div style={styles.formGroup}>
          <label htmlFor="message">الرسالة</label>
          <textarea id="message" name="message" placeholder="اكتب رسالتك هنا..." required style={styles.textarea}></textarea>
        </div>
        <div style={styles.formGroup}>
          <center>
            <button type="submit" style={styles.button}>إرسال</button>
          </center>
        </div>
      </form>
    </div>
  );
};

const styles = {
  container: {
    backgroundColor: "white",
    padding: "20px",
    margin: "30px auto",
    borderRadius: "8px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    width: "90%",
    maxWidth: "600px",
    textAlign: "right",
    direction: "rtl",
    fontFamily: "Arial, sans-serif",
  },
  title: {
    textAlign: "center",
    color: "#750a45",
  },
  form: {
    width: "100%",
  },
  formGroup: {
    marginBottom: "15px",
  },
  input: {
    width: "90%",
    padding: "10px",
    border: "1px solid #ddd",
    borderRadius: "5px",
    fontSize: "1em",
  },
  textarea: {
    width: "90%",
    padding: "10px",
    border: "1px solid #ddd",
    borderRadius: "5px",
    fontSize: "1em",
    resize: "none",
    height: "100px",
  },
  button: {
    width: "70%",
    padding: "10px",
    backgroundColor: "#750a45",
    color: "white",
    border: "none",
    borderRadius: "5px",
    fontSize: "1em",
    cursor: "pointer",
  },
};

export default ContactForm;
