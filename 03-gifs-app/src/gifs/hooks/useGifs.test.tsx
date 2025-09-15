import { act, renderHook } from "@testing-library/react";
import { describe, expect, test, vi } from "vitest";
import { useGifs } from "./useGifs";
import * as gifActions from "../actions/get-gifs-by-query.action";



describe('useGifs', () => {

    test('should return default values and methods', () => { 
        //renderizamos el hook
        const {result} = renderHook(()=> useGifs())

        expect(result.current.gifs.length).toBe(0)
        expect(result.current.previousTerms.length).toBe(0)
        expect(result.current.handleSearch).toBeDefined()
        expect(result.current.handleTermClicked).toBeDefined()

     })

     test('should return a list of gifs', async () => {
        const { result } = renderHook(() => useGifs() );

        await act(async() => { 
           await result.current.handleSearch('goku');
        })

        expect(result.current.gifs.length).toBe(10);

     })

     test('should a list a gifs when handleTermClicked is called', async() => { 
        const  { result } = renderHook(()=> useGifs())

        await act(async() => {
            await result.current.handleTermClicked('goku');
        })

        expect(result.current.gifs.length).toBe(10)
        
      })

      test('should return a list gif from cache', async() => { 
        const { result } = renderHook(()=>useGifs());

        
        await act(async ()=>{
            await result.current.handleTermClicked('goku')
        })
        
        vi.spyOn(gifActions, 'getGifsByQuery').mockRejectedValue(
            new Error('This is my custom error')
        )
        expect(result.current.gifs.length).toBe(10)
       })


    //    test('should return no more than 8 previous terms', async() => {
        
    //     const { result } = renderHook(()=> useGifs())

    //     vi.spyOn(gifActions, 'getGifsByQuery').mockResolvedValue([]);

    //     await act(async()=>{
    //         await result.current.handleTermClicked('goku')
    //     })

    //     await act(async()=>{
    //         await result.current.handleTermClicked('goku2')
    //     })

    //     await act(async()=>{
    //         await result.current.handleTermClicked('goku3')
    //     })

    //     await act(async()=>{
    //         await result.current.handleTermClicked('goku4')
    //     })

    //     await act(async()=>{
    //         await result.current.handleTermClicked('goku5')
    //     })

    //     await act(async()=>{
    //         await result.current.handleTermClicked('goku6')
    //     })

    //     await act(async()=>{
    //         await result.current.handleTermClicked('goku7')
    //     })

    //     await act(async()=>{
    //         await result.current.handleTermClicked('goku8')
    //     })

    //     await act(async()=>{
    //         await result.current.handleTermClicked('goku9')
    //     })

    //     expect(result.current.previousTerms.length).toBe(8)
    //    })

})