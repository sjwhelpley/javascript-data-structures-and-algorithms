const UNIT_AMOUNT = {
  "PENNY": .01,
  "NICKEL": .05,
  "DIME": .10,
  "QUARTER": .25,
  "ONE": 1.00,
  "FIVE": 5.00,
  "TEN": 10.00,
  "TWENTY": 20.00,
  "ONE HUNDRED": 100.00
}

function countCID(cid) {
  let total = 0;
  for(let i = 0; i < cid.length; i++) {
    total += cid[i][1]
  }
  return total
}

function checkCashRegister(price, cash, cid) {
  let change = cash - price;
  let priceDifference = change;
  let response = { status: "OPEN", change: []}
  const drawerAmount = countCID(cid)
  
  if (change > drawerAmount) {
    response.status = "INSUFFICIENT_FUNDS";
  } else if (change === drawerAmount) {
    response.status = "CLOSED";
    response.change = cid;
  } else {
    const reverseCID = cid.reverse()
    for(let elem of reverseCID) {
      let change = [elem[0], 0];
      while(priceDifference >= UNIT_AMOUNT[elem[0]] && elem[1] > 0) {
        change[1] += UNIT_AMOUNT[elem[0]];
        elem[1] -= UNIT_AMOUNT[elem[0]];

        priceDifference -= UNIT_AMOUNT[elem[0]]
        priceDifference = priceDifference.toFixed(2)
      }

      if (change[1] > 0) {
        response.change.push(change)
      }
    }

    if (priceDifference > 0) {
      response.status = "INSUFFICIENT_FUNDS";
      response.change = []
    }
  }

  return response;
}
