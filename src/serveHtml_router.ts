import httpStatus from 'http-status-codes';
import { IncomingMessage, ServerResponse } from 'http';

const htmlContentType = { 'Content-type': 'text/html' };

const routes : {
  [k: string]: {
    [k: string]: (req: IncomingMessage, res: ServerResponse) => void;
  }
} = {
  'GET': {
    '/info': (req, res) => {
      res.writeHead(httpStatus.OK, { 'Content-type': 'text/plain' });
      res.end('Welcome to the Info Page!');
    }
  },
  'POST': {
    
  },
}

export const setRoutes = (
    url: string, 
    method: 'GET'|'POST', 
    action: (req: IncomingMessage, res: ServerResponse) => void
  ) => {
  routes[method][url] = action;
};

export const handle = (req: IncomingMessage, res: ServerResponse) => {
  try {
    const method = req.method as string;
    const url = req.url as string;
    if (routes[method][url]) {
      routes[method][url](req, res);
    } else {
      res.writeHead(httpStatus.NOT_FOUND, htmlContentType);
      res.end('<h1>No such file exists.</h1>')
    }
  } catch (err) {
    console.error(`error: ${err}`);
  }
}
