import React from 'react';
import numeral from 'numeral';
import { Link } from 'react-router-dom';

const TableCoins = ({ coins }) => {
  return (
    <>
      <table className="table table-hover table-coins">
        <thead>
          <tr>
            <th>Rank</th>
            <th>Symbol</th>
            <th>Name</th>
            <th>Price Usd</th>
            <th>Change 24Hr</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {coins.map((coin) => (
            <tr key={coin.id}>
              <td>{coin.rank}</td>
              <td>
                <Link to={`/coin/${coin.id}`}>
                  <img
                    className="img-thumbnail"
                    src={`https://assets.coincap.io/assets/icons/${coin.symbol.toLowerCase()}@2x.png`}
                    alt={coin.name}
                  />
                </Link>
              </td>
              <td>{coin.name}</td>
              <td>{numeral(coin.priceUsd).format('$0,0.00')}</td>
              <td className={coin.changePercent24Hr < 0 ? 'text-danger' : 'text-success'}>
                {parseFloat(coin.changePercent24Hr).toFixed(2)}%
              </td>
              <td>
              <button
              className="btn btn-outline-secondary"
              type="button"
              >
                +
        </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default TableCoins;
