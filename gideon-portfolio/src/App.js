
import { useState } from "react";

export default function App() {
  const [posts] = useState([
    {
      id: 1,
      title: "The Power of Mariachi Music in Education",
      date: "July 2025",
      excerpt:
        "Exploring how mariachi music can engage students and build cultural pride in classrooms.",
    },
    {
      id: 2,
      title: "Reflections on My First Year at TAMUCC",
      date: "May 2025",
      excerpt:
        "Sharing my journey and growth as a music education student and performer at TAMUCC.",
    },
  ]);

  return (
    <div style={{ padding: '2rem', fontFamily: 'sans-serif' }}>
      <header style={{ textAlign: 'center' }}>
        <h1 style={{ fontSize: '2.5rem', color: '#1e3a8a' }}>M. Gideon Perkins</h1>
        <p>Violinist & Music Educator | Texas A&M University–Corpus Christi</p>
      </header>

      <section style={{ marginTop: '2rem' }}>
        <h2>About Me</h2>
        <p>
          I’m a Music Education major at Texas A&M University–Corpus Christi, studying violin under Dr. Christina Adams. On campus, I serve as Principal Second Violinist for the Concert Orchestra and Principal Violinist for Mariachi de la Isla. I’m also a proud member of the full-tuition scholarship ensemble, the Lichtenstein String Quartet.
        </p>
        <p>
          I work with beginner string students at the Antonio E. Garcia Arts & Education Center and coach the violin section for Mariachi Tierra Mía at Tuloso-Midway High School.
        </p>
        <p>
          Outside campus, I perform with Mariachi Mexicanísimo de Corpus Christi and have had the privilege of opening for artists like George Lopez and competing as a vocal finalist at the Mariachi Extravaganza.
        </p>
      </section>

      <section style={{ marginTop: '2rem' }}>
        <h2>Blog</h2>
        {posts.map(post => (
          <div key={post.id} style={{ marginBottom: '1rem' }}>
            <h3>{post.title}</h3>
            <small>{post.date}</small>
            <p>{post.excerpt}</p>
          </div>
        ))}
      </section>

      <footer style={{ marginTop: '3rem', textAlign: 'center', color: '#666' }}>
        &copy; {new Date().getFullYear()} M. Gideon Perkins
      </footer>
    </div>
  );
}
