import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios';

Vue.use(Vuex)

// B1: tạo state
const testManager = {
    state: () => ({
        major: { ChuyenNganhId: "-1", TenChuyenNganh: 'Tất cả chuyên ngành' },
        job: "-1",
        jobData: [],
        //
        majorPopup: "-1",
        jobPopup: "-1",
        jobDataPopup: [],
        //
        tableData: [],
    }),
};

//student profile
const studentProfile = {
    state: () => ({
        majorStudent: { ChuyenNganhId: "-1", TenChuyenNganh: 'Tất cả chuyên ngành' },
        jobStudent: "-1",
        jobDataStudent: [],
        tableDataStudent: [],
    }),
};

//Setting

const setting = {
    state: () => ({
        khoaHoc: -1,
        tableDataMonHocXetCN: [],
    }),
};

export const store = new Vuex.Store({
    modules: {
        //B2: import module
        testManager: testManager,
        //student profile
        studentProfile: studentProfile,
        //setting
        setting: setting
    },

    // B3: Tạo mutation
    mutations: {
        //Test manager
        onMajorSelect(state, { major, job, responseData, type }) {
            //
            if (!type) {
                state.testManager.major = major;
                state.testManager.jobData = responseData;
                state.testManager.job = job;
            } else {
                state.testManager.majorPopup = major;
                state.testManager.jobDataPopup = responseData;
                state.testManager.jobPopup = job;
            }

        },
        onJobSelect(state, { job, tableData, type }) {
            if (!type) {
                state.testManager.job = job
                state.testManager.tableData = tableData
            } else {
                state.testManager.jobPopup = job;
            }

        },
        onGetQuestions(state, tableData) {
            state.testManager.tableData = tableData
        },

        //student profile
        onMajorStudentSelect(state, { majorStudent, jobStudent, responseDataStudent }) {
            state.studentProfile.majorStudent = majorStudent;
            state.studentProfile.jobDataStudent = responseDataStudent;
            state.studentProfile.jobStudent = jobStudent;
        },
        onJobStudentSelect(state, { jobStudent, tableDataStudent }) {
            state.studentProfile.jobStudent = jobStudent
            state.studentProfile.tableDataStudent = tableDataStudent
        },

        onGetStudents(state, tableDataStudent) {
            state.studentProfile.tableDataStudent = tableDataStudent
        },

        //setting
        onKhoaHocSelect(state, { khoaHoc, responseDataMonHocXetCN }) {
            console.log(khoaHoc);
            state.setting.khoaHoc = khoaHoc;
            state.setting.tableDataMonHocXetCN = responseDataMonHocXetCN;
        },
        onGetMonHocXetCN(state, { tableData, khoaHoc }) {
            state.setting.tableDataMonHocXetCN = tableData;
            state.setting.khoaHoc = khoaHoc;
        },
    },
    // B4: Tạo action (cái này sẽ gọi bên vue)
    actions: {
        //test manager
        onMajorSelectAction({ commit }, { major, type }) {
            let url = 'https://localhost:44326/api/CauHoiHuongPhatTrien';

            if (major && major.ChuyenNganhId !== "-1") {
                url += '?major_id=' + major.ChuyenNganhId;
                let urlJob = `https://localhost:44326/api/CongViecVaHuongPhatTrien/${major.ChuyenNganhId}`;

                axios.get(urlJob).then((response) => {
                    const responseData = response.data;

                    let job = "-1";

                    if (type && responseData) {
                        job = responseData[0];
                    }


                    commit('onMajorSelect', {
                        major,
                        job,
                        responseData,
                        type,
                    });

                });
            } else {
                commit('onMajorSelect', {
                    major: { ChuyenNganhId: "-1", TenChuyenNganh: 'Tất cả chuyên ngành' },
                    job: { TenCongViec: "Chọn hướng phát triển" },
                    responseData: [],
                    type,
                });

            }

            if (!type) {
                axios.get(url).then((response) => {
                    console.log(response.data);
                    commit('onGetQuestions', response.data)
                });

            }

        },

        onJobSelectAction({ commit, state }, { job, type }) {
            let url = 'https://localhost:44326/api/CauHoiHuongPhatTrien?major_id=' + state.testManager.major.ChuyenNganhId + '&job_id=' + job.CongViecVaHuongPhatTrienId;
            axios.get(url).then((response) => {
                const tableData = response.data;
                commit('onJobSelect', { job, tableData, type })
            });
        },
        onGetQuestionsAction({ commit, state }, name) {
            let url = 'https://localhost:44326/api/CauHoiHuongPhatTrien';

            if (state.testManager.major.ChuyenNganhId !== "-1") {
                url += '?major_id=' + state.testManager.major.ChuyenNganhId;

                if (state.testManager.job !== "-1") {
                    url += '&job_id=' + state.testManager.job.CongViecVaHuongPhatTrienId;
                }
                if (name) {
                    url += `&name=${name}`;
                }
            } else {
                if (name) {
                    url += `?name=${name}`;
                }
            }
            console.log(url);


            axios.get(url).then((response) => {
                console.log(response.data);
                commit('onGetQuestions', response.data)
            });
        },

        //student profile
        onMajorStudentSelectAction({ commit }, majorStudent) {
            let url = 'https://localhost:44326/api/SinhVien';

            if (majorStudent && majorStudent.ChuyenNganhId !== "-1") {
                url += '?major=' + majorStudent.ChuyenNganhId;
                let urlJob = `https://localhost:44326/api/CongViecVaHuongPhatTrien/${majorStudent.ChuyenNganhId}`;

                axios.get(urlJob).then((response) => {
                    const responseDataStudent = response.data;

                    let jobStudent = "-1";

                    commit('onMajorStudentSelect', {
                        majorStudent,
                        jobStudent,
                        responseDataStudent,
                    });
                });
            } else {
                commit('onMajorStudentSelect', {
                    majorStudent,
                    jobStudent: { TenCongViec: "Chọn hướng phát triển" },
                    responseStudentData: [],

                });
            }

            axios.get(url).then((response) => {
                commit('onGetStudents', response.data)
            });
        },

        onJobStudentSelectAction({ commit }, jobStudent) {
            let url = 'https://localhost:44326/api/SinhVien' + '?job=' + jobStudent.CongViecVaHuongPhatTrienId;
            axios.get(url).then((response) => {
                const tableDataStudent = response.data;
                commit('onJobStudentSelect', { jobStudent, tableDataStudent })
            });
        },
        onGetStudentsAction({ commit, state }, mssv) {
            let url = 'https://localhost:44326/api/SinhVien';

            if (state.studentProfile.majorStudent && state.studentProfile.majorStudent.ChuyenNganhId !== "-1") {
                url += '?major=' + state.studentProfile.majorStudent.ChuyenNganhId;
            }

            if (mssv) {
                url += `?mssv=${mssv}`;
            }

            axios.get(url).then((response) => {
                commit('onGetStudents', response.data)
            });
        },

        //setting
        onKhoaHocSelectAction({ commit, state }, khoaHoc) {
            let url = 'https://localhost:44326/api/MonHocCSNvaToan/' + khoaHoc;

            axios.get(url).then((response) => {
                const responseDataMonHocXetCN = response.data;
                commit('onKhoaHocSelect', { khoaHoc, responseDataMonHocXetCN })
            });
        },

        onGetMonHocXetCNAction({ commit, state }, khoaHoc) {
            let url = 'https://localhost:44326/api/MonHocCSNvaToan/' + khoaHoc;
            axios.get(url).then((response) => {
                var tableData = response.data;

                commit('onGetMonHocXetCN', {
                    tableData,
                    khoaHoc,
                });
            });
        },

    },
    // B5: Tạo getter (vue get mấy cái state ra)
    getters: {
        //test manager
        major(state) {
            return state.testManager.major
        },
        job(state) {
            return state.testManager.job
        },
        jobData(state) {
            return state.testManager.jobData
        },
        tableData(state) {
            return state.testManager.tableData
        },
        jobPopup(state) {
            return state.testManager.jobPopup
        },
        jobDataPopup(state) {
            return state.testManager.jobDataPopup
        },
        majorPopup(state) {
            return state.testManager.majorPopup
        },
        //student profile
        majorStudent(state) {
            return state.studentProfile.majorStudent
        },
        jobStudent(state) {
            return state.studentProfile.jobStudent
        },
        jobDataStudent(state) {
            return state.studentProfile.jobDataStudent
        },
        tableDataStudent(state) {
            return state.studentProfile.tableDataStudent
        },

        //setting
        khoaHoc(state) {
            return state.setting.khoaHoc
        },
        tableDataMonHocXetCN(state) {
            return state.setting.tableDataMonHocXetCN
        },

    }
})