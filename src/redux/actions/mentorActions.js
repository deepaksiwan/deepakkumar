import axios from 'axios';
import {
  MENTOR_LIST_REQUEST,
  MENTOR_LIST_SUCCESS,
  MENTOR_LIST_FAIL,
  MENTOR_LIST_SEARCH,
} from '../constants/mentorConstants';

export const listMentor = () => async (dispatch) => {
  try {
    dispatch({ type: MENTOR_LIST_REQUEST });
    const { data } = await axios.get(
      'https://mentorkart.org/api/sso-mentor-list'
    );
    const fil = data.data;
    // // console.log(fil)

    dispatch({
      type: MENTOR_LIST_SUCCESS,
      payload: fil,
    });
  } catch (error) {
    dispatch({
      type: MENTOR_LIST_FAIL,
      payload: error,
    });
  }
};

export const listStudentMentor = () => async (dispatch) => {
  try {
    dispatch({ type: MENTOR_LIST_REQUEST });
    const { data } = await axios.get(
      'https://mentorkart.org/api/sso-mentor-list'
    );
    const fil = data.data;
    const std = fil.filter((x) => {
      if (x.user_categories) {
        return x.user_categories.split(',').includes('STUDENT');
      }
    });

    dispatch({
      type: MENTOR_LIST_SUCCESS,
      payload: std,
    });
  } catch (error) {
    dispatch({
      type: MENTOR_LIST_FAIL,
      payload: error,
    });
  }
};

export const listProfessionalMentor = () => async (dispatch) => {
  try {
    dispatch({ type: MENTOR_LIST_REQUEST });
    const { data } = await axios.get(
      'https://mentorkart.org/api/sso-mentor-list'
    );
    const fil = data.data;
    const std = fil.filter((x) => {
      if (x.user_categories) {
        return x.user_categories.split(',').includes('PROFESSIONAL');
      }
    });

    dispatch({
      type: MENTOR_LIST_SUCCESS,
      payload: std,
    });
  } catch (error) {
    dispatch({
      type: MENTOR_LIST_FAIL,
      payload: error,
    });
  }
};

export const listEnterpreneurMentor = () => async (dispatch) => {
  try {
    dispatch({ type: MENTOR_LIST_REQUEST });
    const { data } = await axios.get(
      'https://mentorkart.org/api/sso-mentor-list'
    );
    const fil = data.data;
    const std = fil.filter((x) => {
      if (x.user_categories) {
        return x.user_categories.split(',').includes('ENTREPRENEUR');
      }
    });

    dispatch({
      type: MENTOR_LIST_SUCCESS,
      payload: std,
    });
  } catch (error) {
    dispatch({
      type: MENTOR_LIST_FAIL,
      payload: error,
    });
  }
};

export const searchMentor = (query) => async (dispatch) => {
  try {
    dispatch({ type: MENTOR_LIST_REQUEST });
    const { data } = await axios.get(
      'https://mentorkart.org/api/sso-mentor-list'
    );
    const fil = data.data;
    const std = fil.filter((x) => {
      if (x.area_of_experties) {
        return x.area_of_experties.toLowerCase().includes(query.toLowerCase());
      }
    });
    console.log(std);

    dispatch({
      type: MENTOR_LIST_SEARCH,
      payload: std,
    });
  } catch (error) {
    dispatch({
      type: MENTOR_LIST_FAIL,
      payload: error,
    });
  }
};
