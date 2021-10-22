import axios from 'axios'
import
    {
        PROGRAM_GET_REQUEST,
        PROGRAM_GET_SUCCESS,
        PROGRAM_GET_FAIL,
} from "../constants/programConstants"

export const listProgram = () => async( dispatch ) =>
{
    try
    {
        dispatch( { type: PROGRAM_GET_REQUEST} )
        const { data } = await axios.get( 'https://mentorkart.org/api/sso-courses' )
       
        dispatch( {
            type: PROGRAM_GET_SUCCESS,
            payload: data.data
        } )
        
    } catch ( error )
    {
        dispatch( {
            type: PROGRAM_GET_FAIL,
            payload: error
        } )       
    }   
}

export const listStudentCourse = () => async( dispatch ) =>
{
    try
    {
        dispatch( { type: PROGRAM_GET_REQUEST} )
        const {data} = await axios.get( 'https://mentorkart.org/api/sso-courses' )
        const fil = data.data
        const std = fil.filter( ( x ) => x.user_category.split( ',' ).includes( "STUDENT" ) )
       
        dispatch( {
            type: PROGRAM_GET_SUCCESS,
            payload: std
        } )
        
    } catch ( error )
    {
        dispatch( {
            type: PROGRAM_GET_FAIL,
            payload: error
        } )       
    }   
}

export const listProfessionalCourse = () => async( dispatch ) =>
{
    try
    {
        dispatch( { type: PROGRAM_GET_REQUEST} )
        const {data} = await axios.get( 'https://mentorkart.org/api/sso-courses' )
        const fil = data.data
        const std = fil.filter( ( x ) => x.user_category.split( ',' ).includes( "PROFESSIONAL" ) )
       
        dispatch( {
            type: PROGRAM_GET_SUCCESS,
            payload: std
        } )
        
    } catch ( error )
    {
        dispatch( {
            type: PROGRAM_GET_FAIL,
            payload: error
        } )       
    }   
}


export const listEnterpreneurCourse = () => async( dispatch ) =>
{
    try
    {
        dispatch( { type: PROGRAM_GET_REQUEST} )
        const {data} = await axios.get( 'https://mentorkart.org/api/sso-courses' )
        const fil = data.data
        const std = fil.filter( ( x ) => x.user_category.split( ',' ).includes( "ENTERPRENEUR" ) )
        
        dispatch( {
            type: PROGRAM_GET_SUCCESS,
            payload: std
        } )
        
    } catch ( error )
    {
        dispatch( {
            type: PROGRAM_GET_FAIL,
            payload: error
        } )       
    }   
} 
