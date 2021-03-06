import * as React from 'react';
import { Formik, Form, Field } from 'formik';
import { useState } from 'react';
import axios from 'axios';
import { Spacer } from '@zeit-ui/react';

export const FormikPost = (props: any) => {
  const [postFileName, setPostFileName] = useState('');
  // const [postFilePreview, setPostFilePreview] = useState<string | ArrayBuffer | null | undefined>();
  // const [postFilePreview, setPostFilePreview] = useState<string | ArrayBuffer | null>();

  const [postFilePreview, setPostFilePreview] = useState();
  // const [postFilePreview, setPostFilePreview] = useState<string | null>();



  const createPicpost = async (body: any) => {
    const headers = { 'content-type': 'multipart/form-data' };
    const postUrl: string = '/picposts';
    await axios.post(postUrl, body, { headers })
      .then(function (res) {
        res.data.data.picture = postFilePreview
        pushToPostList(res.data.data);
      });
    props.setNowLoading(false);
    props.postModalCloseHandler()
  };

  const pushToPostList = (post: any) => {
    const arr = Array.from(props.filterPosts);
    arr.unshift(post);
    props.setFilterPosts(arr);
  };

  const onFileChange = (e: any) => {
    const files = e.target.files
    if (files.length > 0) {
      var file = files[0]
      var reader = new FileReader()
      reader.onload = (e) => {
        if (!e.target) return
        setPostFilePreview(e.target.result)
        // setPostFilePreview(e.target.result as string)

        // setPostFilePreview(e.target.result)

      };
      reader.readAsDataURL(file)
    } else {
      setPostFilePreview(null)
    }
  }

  return (
    <Formik
      initialValues={{ picture: '', content: '', user_id: 0, file_name: '' }}

      onSubmit={(values, { resetForm }) => {
        props.setNowLoading(true);

        const submitData = new FormData();
        console.log('values.picture', values.picture)
        submitData.append('picture', values.picture);
        submitData.append('content', values.content);
        submitData.append('user_id', props.currentUserId);
        submitData.append('file_name', values.file_name);



        const body = submitData;
        createPicpost(body);
        console.log('values.picture', values.picture)
        console.log('values.file_name', values.file_name)


        resetForm({});
      }}

      render={({ values, handleSubmit, handleChange, setFieldValue }) => {
        return (
          <Form onSubmit={handleSubmit}>
            <div>
              {postFilePreview != null ? (
                <React.Fragment>
                  <div className="flex flex-col items-center">
                    <label>選択されたファイル</label>
                    < Spacer y={3} />
                    <img src={postFilePreview} className="object-scale-down h-48 w-full" />
                    < Spacer y={1} />
                    <h5>{postFileName}</h5>
                    < Spacer y={3} />
                  </div>
                  <div>
                    <label>コメント</label>
                    <Field
                      type="text"
                      name="content"
                      value={values.content}
                      onChange={handleChange}
                      className="shadow border rounded w-full py-2 px-3 text-gray-700 mt-1 leading-tight focus:outline-none focus:shadow-outline"
                    />
                  </div>
                  < Spacer y={1} />

                  <div className="flex flex-col items-center" >
                    <button type="submit" className="submit-button transition duration-500 ease-in-out bg-blue-900 hover:bg-red-300 transform hover:-translate-y-1 hover:scale-100 text-white hover:text-green font-bold py-3 px-20 border-b-4 border-blue-800 hover:border-red-300 rounded-full cursor-pointer">投稿</button>
                  </div>
                </React.Fragment>
              ) : (
                  <div className="flex flex-col items-center" >
                    <label className="transition duration-500 ease-in-out bg-blue-500 hover:bg-red-500 transform hover:-translate-y-1 hover:scale-110 text-white font-bold py-6 px-6 border-b-4 border-blue-700 hover:border-red-600 rounded-full cursor-pointer">
                      ファイルを選択して下さい
                    <input
                        className="hidden"
                        id="file"
                        name="file"
                        type="file"
                        onChange={(e: any) => {
                          var file = e.target.files[0];
                          var reader = new FileReader();
                          reader.onload = function (item) {
                            setFieldValue('picture', item.target !== null ? item.target.result : null);
                          };
                          console.log('values.picture', values.picture)

                          reader.readAsDataURL(file);
                          setPostFileName(e.target.files[0].name)
                          setFieldValue('file_name', file);
                          console.log('e.target.files[0]', e.target.files[0])
                          onFileChange(e)
                        }}
                      />
                      {/* <input
                        className="hidden"
                        id="file"
                        name="file"
                        type="file"
                        onChange={(e: any) => {
                          var file = e.target.files[0];
                          var reader = new FileReader();
                          reader.onload = function (item) {
                            setFieldValue('picture', file !== null ? file : null);
                          };
                          onFileChange(e)
                        }}
                      /> */}
                    </label>
                  </div>
                )}
            </div>
            < Spacer y={1} />
          </Form>
        );
      }}
    />
  );
};
