import {List} from "antd";
import SingleQuestion from "../SingleQuestion";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useEffect, useState, useMemo } from "react";
import { listQuestions } from "../../../API";

function ListQuestions() {
    const user = useSelector(state => state.auth.login?.currentUser);
    const allQuestions = useSelector(state => state.ans.allQuestions);

    const navigate = useNavigate();
    const dispatch = useDispatch();

    useEffect(() => {

        if(!user?.accessToken) {
            navigate('/login');
        }

    }, [])

    useEffect(() => {
        function createNewAllQuestions() {
          if (user) {
            const idQuestion = "all";
            listQuestions(user?.accessToken, dispatch, idQuestion);
          }
        }
        createNewAllQuestions();
    }, [user, dispatch, allQuestions]);
      
    const newAllQuestions = useMemo(() => {
        if (allQuestions) {
            return allQuestions.filter(item => item.answer === null);
        }
        return [];
    }, [allQuestions]);

    return(
        <div className="clientPost">
            {
                user && allQuestions && newAllQuestions &&
                <List
                    itemLayout="vertical"
                    className='listClientPost'
                    dataSource={newAllQuestions}
                    pagination={{
                        pageSize: 5,
                    }}
                    renderItem={(item) => {
                        return(
                            <SingleQuestion 
                                question={item.question} 
                                user_id={item.user_id}
                                key={item.id}
                                item={item}
                            />    
                        )
                    }}
                >
                </List>
            }
        </div>
    )
}


export default ListQuestions;