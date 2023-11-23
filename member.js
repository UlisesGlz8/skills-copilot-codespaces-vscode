function skillsMember(){
    return{
        restrict: 'E',
        templateUrl: 'modules/skills/views/member.html',
        controller: 'SkillMemberController',
        controllerAs: 'vm',
        blidToController: true,
        scope: {
            member: '='
        }
    };
}