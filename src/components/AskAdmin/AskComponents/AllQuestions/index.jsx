import {List} from "antd";
import SingleQuestion from '../SingleQuestion';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { listQuestions } from '../../../../API';
import { useEffect, useState, useMemo } from 'react';

function AllQuestions() {
    const user = useSelector(state => state.auth.login?.currentUser);
    const allQuestions = useSelector(state => state.ans.allQuestions);

    const navigate = useNavigate();
    const dispatch = useDispatch();

    useEffect(() => {

        if(!user?.accessToken) {
            navigate('/login');
        }

    }, [])

    const [isRequestMade, setRequestMade] = useState(false);
    useEffect(() => {
        function createNewAllQuestions() {
          if (user?.accessToken && !isRequestMade) {
            const idQuestion = "all";
            listQuestions(user?.accessToken, dispatch, idQuestion);
            setRequestMade(true);
          }
        }
        createNewAllQuestions();
    }, [user, dispatch, allQuestions]);
      
    const newAllQuestions = useMemo(() => {
        if (allQuestions) {
            return allQuestions.filter(item => item.answer !== null);
        }
        return [];
    }, [allQuestions]);
    

    return(
        <div className="clientPost">
            {
                user && allQuestions && newAllQuestions
                && 
                <List
                    itemLayout="vertical"
                    className='listClientPost'
                    dataSource={newAllQuestions}
                    pagination={{
                        pageSize: 5,
                    }}
                    renderItem={(item) =>{
                        return(
                            <SingleQuestion
                                name={item.question}
                                desc={item.answer}
                                key={item.id}
                            />    
                        )
                    }}
                >
                </List>
            }
        </div>
    )
}


export default AllQuestions;