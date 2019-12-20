from django.core.exceptions import ObjectDoesNotExist


def check_coordinate_system(study):

    #check manufacturer,
    equipment = study.generalequipmentmoduleattr_set.get().manufacturer

    #check head extension zeego
    for irrad in study.projectionxrayradiationdose_set.get().irradeventxraydata_set.all():
        try:
            delta_y = (float(irrad.irradeventxraymechanicaldata_set.get().doserelateddistancemeasurements_set.get(
            ).table_lateral_position))
        except (ObjectDoesNotExist, TypeError):
            delta_y = 1
            print(delta_y)
        if delta_y < -1:
            return 25
    return 0

