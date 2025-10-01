import React from "react";

function NewsletterForm() {
  return (
    <div
      id="mc_embed_signup"
      style={{
        background: "linear-gradient(135deg, #f9f9f9, #ffffff)",
        padding: "25px",
        borderRadius: "15px",
        fontFamily: "Helvetica, Arial, sans-serif",
        maxWidth: "500px",
        margin: "40px auto",
        boxShadow: "0 8px 25px rgba(0,0,0,0.15)",
        transition: "all 0.3s ease",
      }}
    >
      <form
        action="https://github.us7.list-manage.com/subscribe/post?u=bdb8a4b9b499ec8c5ff082b35&amp;id=8adca3710b&amp;f_id=0089b1e4f0"
        method="post"
        target="_blank"
        noValidate
      >
        <h2 style={{ textAlign: "center", color: "#333", fontWeight: "bold" }}>
          Subscribe Us
        </h2>

        <p
          style={{
            textAlign: "center",
            color: "#666",
            fontSize: "14px",
            marginBottom: "20px",
          }}
        >
          Join our newsletter for the latest updates and exclusive content!
        </p>

        {/* Email Field */}
        <div style={{ position: "relative", margin: "16px 0" }}>
          <input
            type="email"
            name="EMAIL"
            id="mce-EMAIL"
            required
            style={{
              width: "100%",
              padding: "12px 10px",
              borderRadius: "8px",
              border: "1px solid #ccc",
              outline: "none",
              transition: "all 0.3s ease",
            }}
            onFocus={(e) => (e.target.style.borderColor = "#6b5bff")}
            onBlur={(e) => (e.target.style.borderColor = "#ccc")}
          />
          <label
            htmlFor="mce-EMAIL"
            style={{
              position: "absolute",
              top: "-10px",
              left: "10px",
              background: "linear-gradient(135deg, #f9f9f9, #ffffff)",
              padding: "0 5px",
              fontSize: "12px",
              color: "#6b5bff",
            }}
          >
            Email Address *
          </label>
        </div>

        {/* First Name Field */}
        <div style={{ position: "relative", margin: "16px 0" }}>
          <input
            type="text"
            name="FNAME"
            id="mce-FNAME"
            style={{
              width: "100%",
              padding: "12px 10px",
              borderRadius: "8px",
              border: "1px solid #ccc",
              outline: "none",
              transition: "all 0.3s ease",
            }}
            onFocus={(e) => (e.target.style.borderColor = "#6b5bff")}
            onBlur={(e) => (e.target.style.borderColor = "#ccc")}
          />
          <label
            htmlFor="mce-FNAME"
            style={{
              position: "absolute",
              top: "-10px",
              left: "10px",
              background: "linear-gradient(135deg, #f9f9f9, #ffffff)",
              padding: "0 5px",
              fontSize: "12px",
              color: "#6b5bff",
            }}
          >
            First Name
          </label>
        </div>

        {/* Last Name Field */}
        <div style={{ position: "relative", margin: "16px 0" }}>
          <input
            type="text"
            name="LNAME"
            id="mce-LNAME"
            style={{
              width: "100%",
              padding: "12px 10px",
              borderRadius: "8px",
              border: "1px solid #ccc",
              outline: "none",
              transition: "all 0.3s ease",
            }}
            onFocus={(e) => (e.target.style.borderColor = "#6b5bff")}
            onBlur={(e) => (e.target.style.borderColor = "#ccc")}
          />
          <label
            htmlFor="mce-LNAME"
            style={{
              position: "absolute",
              top: "-10px",
              left: "10px",
              background: "linear-gradient(135deg, #f9f9f9, #ffffff)",
              padding: "0 5px",
              fontSize: "12px",
              color: "#6b5bff",
            }}
          >
            Last Name
          </label>
        </div>

        {/* Submit Button */}
        <div style={{ textAlign: "center", marginTop: "25px" }}>
          <input
            type="submit"
            value="Subscribe"
            style={{
              padding: "14px 30px",
              background: "linear-gradient(90deg, #6b5bff, #9b59ff)",
              color: "#fff",
              border: "none",
              borderRadius: "30px",
              cursor: "pointer",
              fontSize: "15px",
              fontWeight: "bold",
              textDecoration: "none",
              boxShadow: "0 4px 15px rgba(0,0,0,0.2)",
              transition: "all 0.3s ease",
            }}
            onMouseOver={(e) => {
              e.target.style.transform = "scale(1.05)";
              e.target.style.boxShadow = "0 6px 20px rgba(107,91,255,0.3)";
            }}
            onMouseOut={(e) => {
              e.target.style.transform = "scale(1)";
              e.target.style.boxShadow = "0 4px 15px rgba(0,0,0,0.2)";
            }}
          />
        </div>
      </form>
    </div>
  );
}

export default NewsletterForm;
