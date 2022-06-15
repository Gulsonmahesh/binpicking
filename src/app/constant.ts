export const BASEURL = 'http://127.0.0.1:8000';

export const GRIPPERS = [
    {image: 'assets/robot.webp', name:'Parallel Finger', id:1}, {image: 'assets/robot.webp', name:'Vaccum Gripper', id:2},
    {image: 'assets/robot.webp', name:'Vaccum Gripper', id:3}, {image: 'assets/robot.webp', name:'Vaccum Gripper', id:4},
    {image: 'assets/robot.webp', name:'Vaccum Gripper', id:5}, {image: 'assets/robot.webp', name:'Vaccum Gripper', id:6}
]

export const Validation = (data: any) => {
    return data !==null && data!=='' && data !== undefined;
}