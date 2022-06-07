import "../page-styles/PageStyles.css";
import { FaWater } from "react-icons/fa";

const Introducao = () => {
  return (
    <div className="Intro">
      <h1 className="H1Intro">
        SISTEMA DE REGISTRO DE PARÂMETROS DE QUALIDADE DE ÁGUA{" "}
      </h1>
      <div className="Desenho">
        <FaWater />
      </div>
    </div>
  );
};

export default Introducao;
