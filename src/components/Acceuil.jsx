import React, { useState } from "react";
import "./styles.css"; // Make sure to create a CSS file and import it

const HomePage = () => {
  const [likes, setLikes] = useState({ 1: 0, 2: 0 });
  const [comments, setComments] = useState({ 1: [], 2: [] });
  const [commentInputs, setCommentInputs] = useState({ 1: "", 2: "" });

  const toggleLike = (id) => {
    setLikes((prev) => ({ ...prev, [id]: prev[id] + 1 }));
  };

  const handleCommentChange = (id, value) => {
    setCommentInputs((prev) => ({ ...prev, [id]: value }));
  };

  const addComment = (id) => {
    if (commentInputs[id].trim() !== "") {
      setComments((prev) => ({
        ...prev,
        [id]: [...prev[id], commentInputs[id]],
      }));
      setCommentInputs((prev) => ({ ...prev, [id]: "" }));
    }
  };

  return (
    <div dir="rtl" style= {{ textAlign: "right", fontFamily: "Arial, sans-serif" }}>
      <header style={{ backgroundColor: "#750a45", color: "white", padding: "10px 0", textAlign: "center" }}>
        <h1>زُمُرُّد</h1>
      </header>

      <nav style={{ display: "flex", justifyContent: "flex-start", backgroundColor: "#fff", padding: "0 20px" }}>
        <a href="#accueil">الصفحة الرئيسية</a>
        <a href="#auteurs">الكاتب</a>
        <a href="login.html">الدخول إلى حسابي</a>
        <a href="contact.html">اتصل بنا</a>
      </nav>

      <div className="main-content" id="accueil" style={{ padding: "20px" }}>
        <center>
          <h2>كتابات زُمُرُّدَة...</h2>
        </center>

        {[1, 2].map((id) => (
          <div key={id} className="text-preview" style={{ backgroundColor: "white", padding: "15px", margin: "15px auto", borderRadius: "8px", boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)", width: "50%" }}>
            <h2>عنوان النص {id}</h2>
            <p>
              مقتطف من النص {id}... <a href="#">قراءة المزيد</a>
            </p>

            <div className="reaction-comment-section" style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: "10px" }}>
              <div className="reaction-buttons">
                <button onClick={() => toggleLike(id)} style={{ fontSize: "1.5em", border: "none", backgroundColor: "transparent", cursor: "pointer", color: likes[id] > 0 ? "#750a45" : "gray" }}>
                  &#10084;
                </button>
                <span className="like-counter">{likes[id]}</span>
              </div>

              <div className="comment-section" style={{ display: "flex", alignItems: "center" }}>
                <textarea
                  value={commentInputs[id]}
                  onChange={(e) => handleCommentChange(id, e.target.value)}
                  placeholder="اكتب تعليقك هنا..."
                  style={{ width: "50%", height: "20px", padding: "5px", borderRadius: "5px", border: "1px solid #ddd", textAlign: "right", marginRight: "10px", resize: "none" }}
                />
                <button onClick={() => addComment(id)} style={{ padding: "5px 15px", backgroundColor: "#750a45", color: "white", border: "none", cursor: "pointer" }}>
                  نشر
                </button>
              </div>
            </div>

            <ul className="comment-list" style={{ marginTop: "15px", padding: "0", listStyle: "none" }}>
              {comments[id].map((comment, index) => (
                <li key={index} className="comment" style={{ fontSize: "0.9em", marginBottom: "10px", padding: "10px", color: "#333", textAlign: "right", backgroundColor: "#f9f9f9", border: "1px solid #ddd", borderRadius: "8px", boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)" }}>
                  {comment}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <footer style={{ textAlign: "center", padding: "10px", backgroundColor: "#750a45", color: "white" }}>
        <p>&copy; 2025 زُمُرُّد. جميع الحقوق محفوظة.</p>
      </footer>
    </div>
  );
};

export default HomePage;
