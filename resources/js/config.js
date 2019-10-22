/**
 * Defines the API route we are using.
 */
var url = '';
var api_url = '';

switch( process.env.NODE_ENV ){
    case 'development':
        url = 'localhost';
        api_url = 'localhost/api';
        break;
    case 'production':
        url = 'https://www.mozilan.com';
        api_url = 'https://www.mozilan.com/api';
        break;
}
export const LVBLOG_CONFIG = {
    URL:url,
    API_URL: api_url,
};