import React, { useState } from "react";
import { Table, Modal, Input } from "antd";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
import "./ToDoList.css";

const ToDoList = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [editList, setEditList] = useState(null);
  const dateBuilder = (d) => {
    let months = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];
    let days = ["Sun", "Mon", "Tue", "wed", "Thur", "Fri", "Sat"];

    let day = days[d.getDay()];
    let date = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear();

    return `${day}, ${month} ${date}, ${year}`;
  };

  const [dataSource, setDataSource] = useState([
    {
      id: Math.random(),
      key: Math.random(),
      Date: dateBuilder(new Date()),
      Title: "Do A Work",
      Description: "work",
      DueDate: "27-07-2022",
      Tags: "Tag123",
      status: "open",
    },
    {
      id: Math.random(),
      key: Math.random(),
      Date: dateBuilder(new Date()),
      Title: "Go To Gym",
      Description: "Exercise",
      DueDate: "01-08-2022",
      Tags: "Tag123",
      status: "working",
    },
    {
      id: Math.random(),
      key: Math.random(),
      Date: dateBuilder(new Date()),
      Title: "Read A Book",
      Description: "Book",
      DueDate: "01-08-2022",
      Tags: "Tag123",
      status: "done",
    },
  ]);
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredeDes, setEnteredeDes] = useState("");
  const [enteredDueDate, setEnteredDueDate] = useState("");
  const [enteredeTags, setEnteredTags] = useState("");
  const [status, setStatus] = useState("");

  const titleHandler = (e) => {
    setEnteredTitle(e.target.value);
  };
  const desHandler = (e) => {
    setEnteredeDes(e.target.value);
  };
  const dueDateHandler = (e) => {
    setEnteredDueDate(e.target.value);
  };
  const tagHandler = (e) => {
    setEnteredTags(e.target.value);
  };
  const statusHandler = (e) => {
    setStatus(e.target.value);
  };

  const columns = [
    {
      title: "Date",
      dataIndex: "Date",
      key: "key",
    },
    {
      title: "Title",
      dataIndex: "Title",
      key: "key",
      sorter: (a, b) => a.Title - b.Title,
    },
    {
      title: "Description",
      dataIndex: "Description",
      key: "key",
    },
    {
      title: "Due Date",
      dataIndex: "DueDate",
      key: "key",
    },
    {
      title: "Tags",
      dataIndex: "Tags",
      key: "key",
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "key",
    },
    {
      title: "Actions",
      render: (record) => {
        return (
          <>
            <EditOutlined
              onClick={() => {
                onEditList(record);
              }}
            />
            <DeleteOutlined
              onClick={() => {
                onDeleteList(record);
              }}
              style={{ color: "red", marginLeft: 20 }}
            />
          </>
        );
      },
    },
  ];

  const onAddList = (e) => {
    e.preventDefault();
    const randomnum = parseInt(Math.random() * 1000);
    const newList = {
      key: Math.random(),
      id: randomnum,
      Date: dateBuilder(new Date()),
      Title: enteredTitle,
      Description: enteredeDes,
      DueDate: enteredDueDate,
      Tags: enteredeTags,
      status: status,
    };

    if (enteredTitle && enteredeDes && status) {
      setDataSource((prev) => {
        return [...prev, newList];
      });
    } else {
      Modal.confirm({
        title: "Please Enter Title, Description And Status",
      });
    }
  };

  const onDeleteList = (record) => {
    Modal.confirm({
      title: "Are you sure want to delete this record!",
      okText: "yes",
      okType: "danger",
      onOk: () => {
        setDataSource((prev) => {
          return prev.filter((list) => list.id !== record.id);
        });
      },
    });
  };

  const onEditList = (record) => {
    setIsEditing(true);
    setEditList({ ...record });
  };

  const resetEditing = () => {
    setIsEditing(false);
    setEditList(null);
  };

  return (
    <>
      <h1 className="heading">TO-Do-List</h1>
      <form onSubmit={onAddList}>
        <ul className="wrapper">
          <li className="form-row">
            <label>Title</label>
            <input
              type="text"
              value={enteredTitle}
              onChange={titleHandler}
              required
              autoFocus
            />
          </li>
          <li className="form-row">
            <label>Description</label>
            <input
              type="text"
              value={enteredeDes}
              onChange={desHandler}
              required
            />
          </li>
          <li className="form-row">
            <label>due Date </label>
            <input
              type="date"
              value={enteredDueDate}
              onChange={dueDateHandler}
            />
          </li>
          <li className="form-row">
            <label>Tags </label>
            <input type="text" value={enteredeTags} onChange={tagHandler} />
          </li>

          <li className="form-row">
            <label>Status</label>
            <select onChange={statusHandler} required>
              <option>open</option>
              <option>working</option>
              <option>Done</option>
              <option>OverDue</option>
            </select>
          </li>
          <li className="form-row">
            <button onClick={onAddList}> Add List</button>
          </li>
        </ul>
      </form>

      <Table
        className="table-data"
        onClick={onAddList}
        dataSource={dataSource}
        columns={columns}
      ></Table>

      <Modal
        title="Edit Title"
        visible={isEditing}
        okText="Save"
        onCancel={() => {
          resetEditing();
          // setIsEditing(false);
        }}
        onOk={() => {
          setDataSource((prev) => {
            return prev.map((list) => {
              if (list.id === editList.id) {
                return editList;
              } else {
                return list;
              }
            });
          });
          resetEditing();
          // setIsEditing(false);
        }}
      >
        <Input
          value={editList?.Title}
          onChange={(e) => {
            setEditList((prev) => {
              return { ...prev, Title: e.target.value };
            });
          }}
        />
        <Input
          value={editList?.Description}
          onChange={(e) => {
            setEditList((prev) => {
              return { ...prev, Description: e.target.value };
            });
          }}
        />
        <Input
          value={editList?.DueDate}
          onChange={(e) => {
            editList((prev) => {
              return { ...prev, DueDate: e.target.value };
            });
          }}
        />
        <Input
          value={editList?.Tags}
          onChange={(e) => {
            editList((prev) => {
              return { ...prev, Tags: e.target.value };
            });
          }}
        />
        <Input
          value={editList?.status}
          onChange={(e) => {
            editList((prev) => {
              return { ...prev, status: e.target.value };
            });
          }}
        />
      </Modal>
    </>
  );
};

export default ToDoList;
