import React, { useEffect, useState } from 'react';
import numeral from 'numeral';
import { NavLink, useParams } from 'react-router-dom';
import { getcoinId } from '../helpers/coinsApi';

const CoinScreen = () => {
  const { id } = useParams();
  const [coin, setCoin] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    traerDatos(id);
  }, [id]);

  const traerDatos = async (id) => {
    try {
      const { data } = await getcoinId(id);
      setCoin(data);
    } catch (error) {
      setError('Error fetching coin data');
    }
    setLoading(false);
  };

  if (loading) {
    return <div className='container'><div className='col text-center'><h3>Loading...</h3></div></div>;
  }

  if (error) {
    return <div className='container'><div className='col text-center'><h3>{error}</h3></div></div>;
  }

  return (
    <div className="container">
      {coin && (
        <>
          <div className="row mt-5">
            <div className="col text-center">
              <h1>{coin.name}</h1>
            </div>
          </div>
          <div className="row">
            <div className="col col-md-8 offset-md-2">
              <div className="card card-coin mb-3">
                <div className="row g-0">
                  <div className="col-md-4 p-3 text-center img-card">
                    <img src={`https://assets.coincap.io/assets/icons/${coin.symbol.toLowerCase()}@2x.png`} className="img-fluid rounded-start" alt={coin.name} />
                  </div>
                  <div className="col-md-8">
                    <div className="card-body">
                      <h3 className="card-title">{coin.symbol}</h3>
                      <p className="card-text">
                        <b>
                          Rank <span className="fs-3">#{coin.rank}</span>
                        </b>
                      </p>
                      <p className="card-text">
                        <b>Price Usd:</b> <span>{numeral(coin.priceUsd).format('$0,0.00')}</span>
                      </p>
                      <div>
                        <a href={coin.explorer} target="_blank" rel="noopener noreferrer">
                          <span className="badge text-bg-primary">Explorer</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default CoinScreen;
