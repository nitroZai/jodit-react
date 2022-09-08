import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import baseUrl from "../common/url";

const ListGroup = () => {
  let [policies, setPolicies] = useState([{}]);

  useEffect(() => {
    const callBackendGET = async () => {
      const policiesData = await axios
        .get(baseUrl + "get")
        .then((response) => {
          setPolicies(response.data);
          // console.log(policies);
        })
        .catch((err) => console.error(err));

      // policies = policiesData.data;
      // console.log("in the get function", policies);
      // return temp;
    };

    callBackendGET();
  }, []);

  // console.log(policies[0]);

  return (
    <ul className="list-group">
      {console.log("befire nao", policies)}
      {policies.map((policy) => {
        // console.log("fasdfds", policies);
        return (
          <li className="list-group-item" key={policy.id}>
            <Link to={`/edit/${parseInt(policy.id)}`}>{policy.by_who}</Link>
          </li>
        );
      })}
    </ul>
  );
};

export default ListGroup;
