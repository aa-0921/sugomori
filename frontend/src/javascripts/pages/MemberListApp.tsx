

import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import { MemberList } from '../components/memberList';

export const MemberListApp = () => {
  const [fetchUsers, setFetchUsers] = useState([]);
  const [followUsers, setFollowUsers] = useState([]);

  // 開発時点ではログイン処理を飛ばしている為、ID1で固定。後々修正
  const currentUserId = 1;
  const getFollowListUrl: string = `/users/follow_list/${currentUserId}`;
  // useEffect(() => {
  //   FetchData(getFollowListUrl).then((res) => {
  //     setFollowUsers(res.data.map((el: any) => el.id));
  //   });
  // }, []);

  const pushToFollowUsers = (target: number) => {
    console.log(target, 'ma');
    const arr = Array.from(followUsers);
    arr.push(target);
    setFollowUsers(arr);
  };

  const removeFromFollowUsers = (target: number) => {
    const arr = Array.from(followUsers);
    const nextFollowUsers = arr.filter((el) => el !== target);
    setFollowUsers(nextFollowUsers);
  };

  // const Show = ({ match }: { match: any }) => {
  //   let params = match.params;
  //   return (
  //     <div>
  //       UserName,Email is{' '}
  //       <div>
  //         <strong>{params.id}</strong>
  //       </div>
  //     </div>
  //   );
  // };
  const url: string = '/users';

  // useEffect(() => {
  //   FetchData(url).then((res) => setFetchUsers(res.data));
  // }, []);
  return (
    <React.Fragment>
      <Router>
        <div>
          {/* <Show /> */}
          <span>
            <MemberList
              fetchUsers={fetchUsers}
              followUsers={followUsers}
              pushToFollowUsers={pushToFollowUsers}
              removeFromFollowUsers={removeFromFollowUsers}
            />
          </span>

          <Switch>
            {/* <Route path="/post/:id" component={Show} /> */}
            <Route path="/"></Route>
          </Switch>
        </div>
      </Router>
    </React.Fragment>
  );
};
