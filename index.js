function takeANumber(line, name) {
  line.push(name);
  return (`Welcome, ${name}. You are number ${line.length} in line.`);
}

function nowServing(katzDeliLine) {
  if (katzDeliLine.length > 0) {
  var person = katzDeliLine.shift();
  return `Currently serving ${person}.`
} else {
  return "There is nobody waiting to be served!";
  }
}

function currentLine(katzDeliLine) {
  var message = "The line is currently: "
  if(katzDeliLine.length === 0) {
    return "The line is currently empty."
} else {
  
}
}