function OperationQueue(){
  this.op_len = 0;
  this.ops = [];
}
OperationQueue.prototype.new_operation = function(method, params){
  var op = new Operation('op'+(this.op_len++), method, params);
  this.ops.push(op);
  return op
}


OperationQueue.prototype.serialize = function(){
  for(var l = this.ops.length, i = 0, s = []; i < l; i++) s.push(this.ops[i].op);
  return s;
}


OperationQueue.prototype.document_modify = function(waveId, waveletId, blipId){
  return this.new_operation('document.modify', {waveId: waveId, waveletId: waveletId, blipId: blipId})
}

OperationQueue.prototype.robot_search = function(query, index, num_results){
  return this.new_operation('robot.search', {query: query, index: index || null, numResults: num_results || null})
}


OperationQueue.prototype.robot_fetch_wave = function(waveId, waveletId){
  return this.new_operation('robot.fetchWave', {waveId: waveId, waveletId: waveletId})
}



function Operation(id, method, params){
  this.op = {
    id: id,
    method: 'wave.'+method,
    params: params || {}
  };
}

Operation.prototype.set_param = function(param, value){
  this.op.params[param] = value;
}

