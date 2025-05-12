export function newExpirationTime(){
  return Date.now()+ 10*1000;
}

let nextId = 0;
export function generateId(){
  const curId = nextId;
  nextId += 1;
  return curId;
}