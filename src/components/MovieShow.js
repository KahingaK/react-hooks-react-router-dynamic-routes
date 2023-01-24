import React from "react";
import { useParams } from "react-router-dom";

function MovieShow() {
    const params = useParams();
    console.log(params);
    
  return (
    <div>
      <h3>Movies Show Component!</h3>
    </div>
  );
}

export default MovieShow;