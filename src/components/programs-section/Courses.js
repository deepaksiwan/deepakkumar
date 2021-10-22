import React, { useState, useEffect } from 'react';
import Footer from '../footer/Footer';
import MyNavbar from '../header-section/MyNavbar';
import { useDispatch, useSelector } from 'react-redux';
import {
  listProgram,
  listStudentCourse,
  listProfessionalCourse,
  listEnterpreneurCourse,
} from '../../redux/actions/programActions';

import Modal from 'react-modal';

import SignUpModal from '../join-mentokart/SignUpModal';

const Courses = () => {
  const [showModal, setShowModal] = useState(false);
  const showModalBtn = (bool) => {
    setShowModal(bool);
  };

  const dispatch = useDispatch();
  const programList = useSelector((state) => state.programList);
  const { program } = programList;

  const [sort, setSort] = useState('');

  const handleCLick = (value) => () => {
    setSort(value);
  };

  useEffect(() => {
    dispatch(listProgram());
    if (sort === 'student') {
      dispatch(listStudentCourse());
    }
    if (sort === 'professional') {
      dispatch(listProfessionalCourse());
    }
    if (sort === 'enterpreneur') {
      dispatch(listEnterpreneurCourse());
    }
  }, [dispatch, sort]);

  return (
    <div className='courses'>
      <MyNavbar />
      <div className='courses-head'>
        <div className='container-xxl px-xxl-0 px-lg-5 px-md-4 px-sm-3 py-md-5 py-3'>
          <h1>Programs and courses</h1>
          <form
            action='/search-blogs'
            className='courses-search d-flex justify-content-between align-items-center'
          >
            <div className='form-group'>
              <span>
                <i className='fas fa-search me-2 ms-1'></i>
              </span>
              <input
                type='text'
                name='search-text'
                placeholder='Search Course'
              />
            </div>
          </form>
          <div className='tags d-flex mt-3 mb-md-5 justify-content-center'>
            <ul className='d-flex flex-wrap'>
              <li>
                <button className='btn' onClick={handleCLick('')}>
                  All
                </button>
              </li>
              <li>
                <button className='btn' onClick={handleCLick('student')}>
                  Students
                </button>
              </li>
              <li>
                <button className='btn' onClick={handleCLick('professional')}>
                  Professionals
                </button>
              </li>
              <li>
                <button className='btn' onClick={handleCLick('enterpreneur')}>
                  Enterpreneurs
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className='courses-content'>
        <div id='#all' className='blogs-cards-two container py-5'>
          <div className='text-center'>
            {sort === 'student' ? (
              <h2 className='mb-4'>Student Courses</h2>
            ) : sort === 'professional' ? (
              <h2 className='mb-4'>Professional Courses</h2>
            ) : sort === 'enterpreneur' ? (
              <h2 className='mb-4'>Enterpreneur Courses</h2>
            ) : (
              <h2 className='mb-4'>All Courses</h2>
            )}
          </div>

          <div className='row'>
            {program.map((course, index) => {
              return (
                <div className='col-lg-4 col-md-6 col-12' key={index}>
                  <div className='cards'>
                    <div className='program-card py-3 px-4'>
                      <div className='align-items-center'>
                        <div className=''>
                          <img src='/images/programs-bg.png' alt='' />
                        </div>
                        <div className=''>
                          <div className='category-tags mb-md-3 mb-2'>
                            {course.user_category
                              .split(',')
                              .map((cate, index) => {
                                return (
                                  <span key={index} className='btn btn-sm me-2'>
                                    {cate}
                                  </span>
                                );
                              })}
                          </div>
                          <h2>{course.mk_course_name}</h2>
                          <h1>₹ {course.price} /-</h1>
                          <p className='mb-2'>{course.description}</p>
                          <button
                            onClick={() => {
                              setShowModal(true);
                            }}
                            className='enroll-btn btn px-xl-5 px-md-3 px-3 py-md-1 btn-ani'
                          >
                            Enroll Now
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <Modal
        id='signup-modal'
        isOpen={showModal}
        onRequestClose={() => setShowModal(false)}
        style={{
          overlay: {
            zIndex: '5000',
          },
          content: {
            maxWidth: '1100px',
            margin: 'auto',
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: '15px',
          },
        }}
      >
        <SignUpModal showModalBtn={showModalBtn} />
      </Modal>
      <Footer />
    </div>
  );
};
export default Courses;
