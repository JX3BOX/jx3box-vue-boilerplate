<template>
    <div id="app">
        <Header />
        <Breadcrumb>
            <Info />
        </Breadcrumb>
        <LeftSidebar>
            <Nav />
        </LeftSidebar>
        <Main>
            <!-- content -->
            <RightSidebar>
                <Extend/>
            </RightSidebar>
            <Footer/>
        </Main>
    </div>
</template>

<script>
import Info from '@/components/Info.vue';
import Nav from '@/components/Nav.vue';
import Extend from '@/components/Extend.vue';

    export default {
        name : 'App',
        props:[],
        data : function(){
            return {
                
            }
        },
        computed:{},
        methods:{},
        mounted:function(){},
        components:{
            Info,
            Nav,
            Extend
        }
    }
</script>