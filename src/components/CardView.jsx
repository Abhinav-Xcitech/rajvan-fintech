import React from 'react'
import './CardView.css'

const IIFC_BANK = {
  DATA: [
    {
      title: 'Revenue',
      values: [
        {
          color: 'green',
          value: '$1,000,000',
          label: 'Optional'
        },
        {
          color: 'orange ',
          value: '$23,456',
          label: 'Other '
        }
      ],
      progress: {
        value: "$12,3456",
        color: "green",
        persentaage: "70%"
      }
    },
    {
      title: 'Expenses',
      values: [
        {
          color: 'green',
          value: '$45,765',
          label: 'Optional'
        },
        {
          color: 'orange',
          value: '$45,765',
          label: 'Legal '
        },
        {
          color: 'orange',
          value: '$45,765',
          label: 'Other '
        }
      ],
      progress: {
        value: "$12,3456",
        color: "orange",
        persentaage: "50%"
      }
    }
  ],
  fianal: {
    profit: {
      value: "$36,000",
      persentaage: "85%",
      color: "green"
    },
    tax: '$11,000',
    net: {
      value: "$25,000",
      persentaage: "48%",
      color: "green"
    },
  }
}

function CardView() {
  return (
    <div className="card-view">
      <div className="card">
        <div className="card-header">
          <h3>IIFC BANK Profit Loss</h3>
        </div>
        <hr className='devider-line' />
        {
          IIFC_BANK.DATA.map((data, index) => {
            return (
              <>
                <div className="card-item">
                  <div className="card-item-header">
                    <h3>{data.title}</h3>
                  </div>
                  {
                    data.values.map((value, index) => {
                      return (
                        <div className="card-item-body">
                          <div className="card-item-title">
                            <div class={`tiker ${value.color}`} ></div >
                            <h5>{value.label}</h5>
                          </div>
                          <span>{value.value}</span>
                        </div>
                      )
                    })
                  }

                 
                  <div className="card-item-footer">
                    <h3>TOTAL</h3>
                    <ProgressBar data={data.progress} />
                  </div>

                </div>
                <hr className='devider-line' />
              </>
            )
          })
        }
         <div className="card-item">
          <div className="card-item-final">
            <h3>Profit</h3>
            <ProgressBar data={IIFC_BANK.fianal.profit} />
          </div>
          <div className="card-item-final">
          
            <h3>Tax</h3>
            <span>{IIFC_BANK.fianal.tax}</span>

          </div>
          <div className="card-item-final">
            <h3>Net after tax</h3>
            <ProgressBar data={IIFC_BANK.fianal.net} />
          </div>

        </div>
        <hr className='devider-line' />
        <div className="card-item d-flex">
          <div className="pointer-status">
            <div className="pointer-status-item d-flex">
              <div className="tiker green"></div>
              <h5>Crucial</h5>
            </div>
            <div className="pointer-status-item d-flex">
              <div className=" tiker orange"></div>
              <h5>Non crucial</h5>
            </div>
          </div>
          <div className="Dot-status d-flex">
            <div className="dot-status-item d-flex">
              <div className="circle  green"></div>
              <h5>Well Performing</h5>
            </div>
            <div className="dot-status-item d-flex">
              <div className="circle orange"></div>
              <h5>Average Performing</h5>
            </div>
            <div className="dot-status-item d-flex">
              <div className="circle blue"></div>
              <h5>Stagment</h5>
            </div>
            <div className="dot-status-item d-flex">
              <div className="circle red"></div>
              <h5>Non Performing</h5>
            </div>
          </div>

        </div>

      </div>
    </div>
  )
}

export default CardView


function ProgressBar({data}) {
  return (
    <div className='Progress-bar'>
      <div className={`loader ${data?.color}`} style={{width:data?.persentaage}}>
        <span>{data?.value}</span>
      </div>

    </div>
  )
}
