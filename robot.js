var http = require('http');

function Robot(name, config){
  this.name = name;
  this.image_url = config.image_url;
  this.profile_url = config.profile_url;
  this.handlers = {};
}

Robot.prototype.on = function(event, handler){
  this.handlers[event] = this.handlers[event] || [];
  this.handlers[event].push(handler);
}

function hash(str){
  //not right.
  var len = str.length, x = 0, p = 0;
  x = str.charCodeAt(p) << 7;
  while(--len >= 0)
    x = (100003*x) ^ str.charCodeAt(p++);
  x ^= str.length;
  return x;
}

  def capabilities_xml(self):
    """Return this robot's capabilities as an XML string."""
    lines = []
    for capability, payloads in self._handlers.items():
      for payload in payloads:
        handler, event_class, context, filter = payload
        line = '  <w:capability name="%s"' % capability
        if context:
          if type(context) == list:
            context = ','.join(context)
          line += ' context="%s"' % context
        if filter:
          line += ' filter="%s"' % filter
        line += '/>\n'
        lines.append(line)
    if self._consumer_key:
      oauth_tag = '<w:consumer_key>%s</w:consumer_key>\n' % self._consumer_key
    else:
      oauth_tag = ''
    return ('<?xml version="1.0"?>\n'
            '<w:robot xmlns:w="http://wave.google.com/extensions/robots/1.0">\n'
            '<w:version>%s</w:version>\n'
            '%s'
            '<w:protocolversion>%s</w:protocolversion>\n'
            '<w:capabilities>\n'
            '%s'
            '</w:capabilities>\n'
            '</w:robot>\n') % (self.capabilities_hash(),
                               oauth_tag,
                               ops.PROTOCOL_VERSION,
                               '\n'.join(lines))

Robot.prototype.run = function(){
  this.server = http.createServer(function(req, res){
    if(req.url == '/_wave/capabilities.xml'){
      
    }
  }).listen(80, '127.0.0.1');
}
