import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios';

Vue.use(Vuex)

// B1: tạo state
const testManager = {
    state: () => ({
        major: "-1",
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


export const store = new Vuex.Store({
    modules: {
        //B2: import module
        testManager: testManager
    },

    // B3: Tạo mutation
    mutations: {
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
    },
    // B4: Tạo action (cái này sẽ gọi bên vue)
    actions: {
        onMajorSelectAction({ commit }, { major, type }) {
            let url = 'https://localhost:44326/api/CauHoiHuongPhatTrien';

            if (major && major !== "-1") {
                url += '/' + major.ChuyenNganhId;
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
            }

            if (!type) {
                axios.get(url).then((response) => {
                    console.log(response.data);
                    commit('onGetQuestions', response.data)
                });

            }

        },

        onJobSelectAction({ commit, state }, { job, type }) {
            let url = 'https://localhost:44326/api/CauHoiHuongPhatTrien/' + state.testManager.major.ChuyenNganhId + '?job_id=' + job.CongViecVaHuongPhatTrienId;
            axios.get(url).then((response) => {
                const tableData = response.data;
                commit('onJobSelect', { job, tableData, type })
            });
        },
        onGetQuestionsAction({ commit, state }) {
            let url = 'https://localhost:44326/api/CauHoiHuongPhatTrien';

            if (state.testManager.major !== "-1") {
                url += '/' + state.testManager.major.ChuyenNganhId;
            }

            console.log(url);

            axios.get(url).then((response) => {
                console.log(response.data);
                commit('onGetQuestions', response.data)
            });
        },
    },
    // B5: Tạo getter (vue get mấy cái state ra)
    getters: {
        //
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
    }
})