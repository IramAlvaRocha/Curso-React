import { describe, expect, test } from "vitest";
import { giphyApi } from "./giphy.api";

describe('giphy.api', ()=> {

    test('should be configured correctly', () => { 
        
        expect(giphyApi.defaults.baseURL).toBe('https://api.giphy.com/v1/gifs');

        const params = giphyApi.defaults.params;

        // console.log(params);

        //Evaluación con parámetros separados
        expect(params.lang).toBe('es')
        expect(params.api_key).toBe(import.meta.env.VITE_GIPHY_API_KEY);
        
        //Evaluacion del objeto completo de los parámetros
        expect(params).toStrictEqual({
            lang: 'es',
            api_key: import.meta.env.VITE_GIPHY_API_KEY
        })

     })

})