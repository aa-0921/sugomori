import * as React from 'react';
import { Formik, Form, Field } from 'formik';
import { useState } from 'react';
import { useFormikContext, useField } from 'formik';
import axios from 'axios';
import { Input, Spacer } from '@zeit-ui/react';
import { Modal, Button, Grid, Divider } from '@zeit-ui/react';

export const FormikComment = (props: any) => {
  const createComment = async (body: any) => {

    const headers = { 'content-type': 'multipart/form-data' };
    const postUrl: string = `/picposts/${props.clickedPostId}/comments`;
    console.log('POST直前')
    await axios.post(postUrl, body, { headers })
      .then(function (res) {
        console.log('res.data.data', res.data.data);
        pushToCommentList(res.data.data);
      });
    // pushToCommentList(res.data.data);
  };

  const pushToCommentList = (postedComment: any) => {
    console.log('postedComment', postedComment);
    const arr = Array.from(props.fetchComments);
    arr.unshift(postedComment);
    props.setFetchComments(arr);
  };

  return (
    <Formik
      initialValues={{ content: '', post_id: 0 }}

      onSubmit={(values, { resetForm }) => {
        const submitData = new FormData();
        submitData.append('content', values.content);
        submitData.append('picpost_id', props.clickedPostId);
        submitData.append('user_name', props.currentUserData.name);
        const body = submitData;
        createComment(body);
        resetForm({});
      }}

      render={({ values, handleSubmit, handleChange, setFieldValue }) => {
        return (
          <Form onSubmit={handleSubmit}>
            <div>
              <React.Fragment>
                <div>
                  <label className="comment-label">コメント</label>
                  <Field
                    type="text"
                    name="content"
                    value={values.content}
                    onChange={handleChange}
                    className="commentForm shadow border rounded w-full py-2 px-3 text-gray-700 mt-1 leading-tight focus:outline-none focus:shadow-outline"
                  />
                </div>
                < Spacer y={1} />
                <div className="flex flex-col items-center" >
                  <button type="submit" className="submit-button transition duration-500 ease-in-out bg-blue-900 hover:bg-red-300 transform hover:-translate-y-1 hover:scale-100 text-white hover:text-green font-bold py-3 px-20 border-b-4 border-blue-800 hover:border-red-300 rounded-full cursor-pointer">コメント投稿</button>
                </div>
              </React.Fragment>
            </div>

            < Spacer y={1} />
          </Form>
        );
      }}
    />
  );
};
