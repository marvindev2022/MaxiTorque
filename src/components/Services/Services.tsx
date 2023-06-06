import motor from "./../../assets/motor.png";
import clean from "./../../assets/clean.png";
import trasmition from "./../../assets/cambio.png";
import breakRepair from "./../../assets/break.png";
import oiel from "./../../assets/oil.png";
import pneu from "./../../assets/pneu.png";

import "./styles.css";

function Services() {
  return (
    <div className="container-services">
      <div className="card">
        <img src={oiel} alt="Troca de Óleo" />
        <h3>Troca de Óleo</h3>
        <p>
          Serviço especializado de troca de óleo, garantindo a lubrificação
          adequada do motor e prolongando sua vida útil.
        </p>
      </div>

      <div className="card">
        <img src={breakRepair} alt="Freios" />
        <h3>Freios</h3>
        <p>
          Manutenção e reparo do sistema de freios, garantindo segurança e
          eficiência nas frenagens do veículo.
        </p>
      </div>

      <div className="card">
        <img src={trasmition} alt="Câmbio" />
        <h3>Câmbio</h3>
        <p>
          Revisão e conserto do sistema de câmbio, assegurando o correto
          funcionamento das marchas e suavidade nas trocas.
        </p>
      </div>

      <div className="card">
        <img src={clean} alt="Injeção Eletrônica" />
        <h3>Injeção Eletrônica</h3>
        <p>
          Especialização em diagnóstico e reparo do sistema de injeção
          eletrônica, otimizando o desempenho e consumo de combustível.
        </p>
      </div>

      <div className="card">
        <img src={motor} alt="Motores" />
        <h3>Motores</h3>
        <p>
          Manutenção e revisão de motores, incluindo reparos, troca de peças e
          ajustes para garantir um funcionamento suave e eficiente.
        </p>
      </div>

      <div className="card">
        <img src={pneu} alt="Recarga de Bateria" />
        <h3>Recarga de Bateria</h3>
        <p>
          Serviço de recarga e teste de bateria para garantir o pleno
          funcionamento do sistema elétrico do veículo.
        </p>
      </div>
    </div>
  );
}

export default Services;
