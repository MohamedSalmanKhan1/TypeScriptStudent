import {Student} from './student'
import express from 'express';

const app= express();
const port= 3000;

let studentList = getStudent();
console.log(studentList);