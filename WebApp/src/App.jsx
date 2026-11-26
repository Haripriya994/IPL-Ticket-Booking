import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import MatchCard from "./components/MatchCard";
import { supabase } from "./supabase";
import "./App.css";

function App() {

  const [matches, setMatches] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchMatches();
  }, []);

  async function fetchMatches() {
    const { data, error } = await supabase
      .from("matches")
      .select("*")
      .order("id", { ascending: true });

    if (error) {
      console.error("Error fetching matches:", error.message);
    } else {
      setMatches(data);
    }

    setLoading(false);
  }

  return (
    <div>
      <Navbar />

      <Hero />

      <section id="matches">
        <h1>Upcoming IPL Matches</h1>

        {loading ? (
          <p>Loading matches...</p>
        ) : matches.length === 0 ? (
          <p>No matches available.</p>
        ) : (
          <div className="matches-container">

            {matches.map((match) => (
              <MatchCard
                key={match.id}
                team1={match.team1}
                team2={match.team2}
                date={match.match_date}
                venue={match.venue}
              />
            ))}

          </div>
        )}
      </section>

      <section id="booking">
        <h2>Book Your IPL Tickets</h2>
        <p>Select your favourite match and enjoy the game!</p>
      </section>

    </div>
  );
}

export default App;