import React, { useState } from "react";

const PublishText = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [successMessage, setSuccessMessage] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("تم نشر النص:", { title, content });
    setSuccessMessage(true);
    setTimeout(() => {
      setTitle("");
      setContent("");
      setSuccessMessage(false);
    }, 2000);
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>نشر نص</h1>
      <form onSubmit={handleSubmit} style={styles.form}>
        <div style={styles.formGroup}>
          <label htmlFor="title" style={styles.label}>العنوان</label>
          <input 
            type="text" 
            id="title" 
            name="title" 
            placeholder="أدخل عنوان النص" 
            required 
            value={title} 
            onChange={(e) => setTitle(e.target.value)}
            style={styles.input} 
          />
        </div>
        <div style={styles.formGroup}>
          <label htmlFor="content" style={styles.label}>المحتوى</label>
          <textarea 
            id="content" 
            name="content" 
            placeholder="اكتب نصك هنا..." 
            required 
            value={content} 
            onChange={(e) => setContent(e.target.value)}
            style={styles.textarea} 
          />
        </div>
        <div style={styles.formGroup}>
          <button type="submit" style={styles.button}>نشر</button>
        </div>
      </form>
      {successMessage && <div style={styles.successMessage}>تم نشر نصك بنجاح &hearts;</div>}
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
    maxWidth: "600px",
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
  form: {
    width: "100%",
  },
  formGroup: {
    marginBottom: "15px",
  },
  label: {
    display: "block",
    marginBottom: "5px",
    fontWeight: "bold",
  },
  input: {
    width: "90%",
    padding: "15px",
    border: "1px solid #000000",
    borderRadius: "10px",
    fontSize: "14px",
  },
  textarea: {
    width: "90%",
    padding: "15px",
    border: "1px solid #000000",
    borderRadius: "10px",
    fontSize: "14px",
    resize: "vertical",
    height: "150px",
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
  successMessage: {
    marginTop: "10px",
    color: "#750a45",
    fontWeight: "bold",
  },
};

export default PublishText;
